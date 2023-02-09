/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Typeform } from "@fern-api/typeform";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment: environments.TypeformEnvironment | string;
        apiKey?: core.Supplier<string>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Here's the general structure for requests to create a form:
     *   - `title`: Title to use for the form.
     *   - `settings`: Object that specifies form settings and metadata, including the language to use for the form, whether the form is publicly available, the basis for the progress bar, and search engine indexing settings.
     *   - `theme`: Theme to use for the form.
     *   - `workspace`: Workspace that contains the form.
     *   - `hidden`: Array of Hidden Fields to use in the form.
     *   - `variables`: Object that keeps track of total score or price, if you use them in the form.
     *   - `welcome_screens`: Array of objects that specify settings and properties for the form's welcome screen.
     *   - `thankyou_screens`: Array of objects that specify settings and properties for the form's thank you screen.
     *   - `fields`: Array of objects that specify the fields to use in the form and their properties, validations, and attachments.
     *   - `logic`: Array of Logic Jump objects to use in the form.
     *
     * Expand the schema below for details about each of these elements. For optional elements, if you don't send a value and the element doesn't have a default value, no attribute will be returned.
     *
     * Any images you want to use in your form must already exist in your Typeform account. If you try to create a form that includes an image that isn't already in your Typeform account, the response will include an "IMAGE_NOT_FOUND" error. Use the [POST https://api.typeform.com/images](/create/reference/create-image) endpoint to add images to your account.
     *
     * **NOTE:** It is not possible to inject third-party content into a typeform using the Create API.
     */
    public async createForm(request: Typeform.CreateFormRequest = {}): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/forms"),
            method: "POST",
            headers: {
                api_key: await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.CreateFormRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.TypeformError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.TypeformError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.TypeformTimeoutError();
            case "unknown":
                throw new errors.TypeformError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
