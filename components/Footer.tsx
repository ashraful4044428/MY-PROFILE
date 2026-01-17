import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-slate-500">
      {profile.footer}
    </footer>
  );
}
