-- À exécuter dans Supabase : SQL Editor > New query > Run

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text not null default '',
  email text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Lecture de son propre profil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Modification de son propre profil"
  on public.profiles for update
  using (auth.uid() = id);

-- Crée automatiquement une ligne dans profiles à chaque inscription
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, first_name, email)
  values (
    new.id,
    split_part(coalesce(
      new.raw_user_meta_data ->> 'first_name',
      new.raw_user_meta_data ->> 'given_name',
      new.raw_user_meta_data ->> 'full_name',
      new.raw_user_meta_data ->> 'name',
      ''
    ), ' ', 1),
    new.email
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
