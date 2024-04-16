import { A } from "@prisma/client";

const a: A = {
    id: "",
    nested: {
        myJsonValue: {
            // not typed
        }
    }
}