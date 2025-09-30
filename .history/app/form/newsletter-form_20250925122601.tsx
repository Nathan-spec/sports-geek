import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterForm(){
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<null | "ok" | "error">(null);
    const [msg, setMsg] = useState("");

    const onSubscriber = async () => {
        if(!email) return;
        setStatus(null);
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source: "homepage-newsletter"}),
        });
        }
    }
} 