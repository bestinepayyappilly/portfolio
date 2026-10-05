import { permanentRedirect } from "next/navigation";

// The product resume is the default at /resume; keep old links working
export default function ProductResumePage() {
  permanentRedirect("/resume");
}
