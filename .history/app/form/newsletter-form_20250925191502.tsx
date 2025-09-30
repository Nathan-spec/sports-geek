import { useState } from "react"
import { Button } from "@/components/ui/button"
import { set } from "date-fns";

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
        const data = await res.json();
        if (res.ok && data.ok) {
            setStatus("ok");
            setMsg("You're subscribed! 🎉");
            setEmail("");
        } else {
            setStatus("error");
            setMsg(data.error || "Could not subscibe.");
        }
        } catch {
            setStatus("error");
            setMsg("Network error. Try again.");
        }
    };
    return (
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
                type="email"
                placeholder="Your email address"
                value={email}
                className="flex-1 px-4 py-3 rounded-lg text-black"
                onChange={(e) => setEmail(e.target.value)}
                />

                <Button className="bg-black hover:bg-gray-800 px-8" onClick={onSubscriber}>
                    Subscribe
                </Button>
        </div>
    );
} 