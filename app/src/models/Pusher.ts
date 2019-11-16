export interface Response {
        message: string | undefined,
        comment: string | undefined,
        messageLabel: "SUCCESS" | "WARNING" | "ERROR";
        conversationLabel: "SUCCEED" | "IN_PROGRESS" | "FAILED";
}