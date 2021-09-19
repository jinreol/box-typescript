
//-----------------------------------------
// Interface Extend
//-----------------------------------------

// 인터페이스에서 인터페이스를 상속받아서 확장시킬 수 있다. 
{
    interface Mailable {
        send(email: string): boolean 
        queue(email: string): boolean 
    }

    interface FutureMailable extends Mailable {
        later(email: string, after: number): boolean 
    }

    class Mail implements FutureMailable {
        later(email: string, after: number): boolean {
            console.log(`Send email to ${email} in ${after} ms.`)
            return true
        }

        send(email: string): boolean {
            console.log(`Sent email to ${email}. `);
            return true;
        }

        queue(email: string): boolean {
            console.log(`Queue an email to ${email}.`);
            return true;
        }
    }
}