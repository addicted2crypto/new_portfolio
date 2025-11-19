import { redirect } from 'next/navigation';

export default function ResumePage() {
  // Redirect to the static HTML resume in public folder
  redirect('/resume.html');
}
