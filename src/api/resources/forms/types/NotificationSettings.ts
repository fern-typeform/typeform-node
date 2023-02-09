/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Settings for notifications sent to respondents immediately after submitting the typeform.
 */
export interface NotificationSettings {
    /** true to send respondent notifications. false to disable respondent notifications. */
    enabled?: boolean;
    /** Email where respondent notification will be sent. Must be a Recall Information value based on respondent's answer to a field: {{field:ref}} or {{hidden:ref}}. */
    recipient: string;
    replyTo?: string[];
    /** Subject to use for the notification email. Can combine text and Recall Information value from one or more fields. Available Recall Information values are {{form:title}}, {{account:fullname}}, {{account:email}}, {{account:name}}, {{link:report}}, and standard Recall Information for fields {{field:ref}} and hidden fields {{hidden:ref}}. */
    subject: string;
    /** Message to include in the body of the notification email. Can combine text and Recall Information value from one or more fields. Available Recall Information values are {{form:title}}, {{account:fullname}}, {{account:email}}, {{account:name}}, {{link:report}}, {{form:all_answers}}, and standard Recall Information for fields {{field:ref}} and hidden fields {{hidden:ref}}. You can format messages with bold (`*bold*`) and italic (`_italic_`) text. HTML tags are forbidden. */
    message: string;
}