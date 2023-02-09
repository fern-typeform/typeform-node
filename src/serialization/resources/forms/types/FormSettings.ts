/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Typeform } from "@fern-api/typeform";
import * as core from "../../../../core";

export const FormSettings: core.serialization.ObjectSchema<
    serializers.forms.FormSettings.Raw,
    Typeform.forms.FormSettings
> = core.serialization.object({
    language: core.serialization.lazy(async () => (await import("../../..")).forms.Language).optional(),
    isPublic: core.serialization.property("is_public", core.serialization.boolean().optional()),
    progressBar: core.serialization.property(
        "progress_bar",
        core.serialization.lazy(async () => (await import("../../..")).forms.ProgressBarType).optional()
    ),
    showProgressBar: core.serialization.property("show_progress_bar", core.serialization.boolean().optional()),
    showTypeformBranding: core.serialization.property(
        "show_typeform_branding",
        core.serialization.boolean().optional()
    ),
    meta: core.serialization.lazyObject(async () => (await import("../../..")).forms.FormMetadata).optional(),
    redirectAfterSubmitUrl: core.serialization.property(
        "redirect_after_submit_url",
        core.serialization.string().optional()
    ),
    googleAnalytics: core.serialization.property("google_analytics", core.serialization.string().optional()),
    facebookPixel: core.serialization.property("facebook_pixel", core.serialization.string().optional()),
    googleTagManager: core.serialization.property("google_tag_manager", core.serialization.string().optional()),
    notifications: core.serialization
        .lazyObject(async () => (await import("../../..")).forms.FormNotificationSettings)
        .optional(),
});

export declare namespace FormSettings {
    interface Raw {
        language?: serializers.forms.Language.Raw | null;
        is_public?: boolean | null;
        progress_bar?: serializers.forms.ProgressBarType.Raw | null;
        show_progress_bar?: boolean | null;
        show_typeform_branding?: boolean | null;
        meta?: serializers.forms.FormMetadata.Raw | null;
        redirect_after_submit_url?: string | null;
        google_analytics?: string | null;
        facebook_pixel?: string | null;
        google_tag_manager?: string | null;
        notifications?: serializers.forms.FormNotificationSettings.Raw | null;
    }
}
