/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Typeform } from "@fern-api/typeform";
import urlJoin from "url-join";
import * as errors from "../../../../errors";
import * as serializers from "../../../../serialization";
import { Client as MessagesClient } from "../resources/messages/client/Client";

export declare namespace Client {
    interface Options {
        environment?: environments.TypeformEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Retrieves a list of JSON descriptions for all forms in your Typeform account (public and private). Forms are sorted by creation date in descending order.
     */
    public async list(request: Typeform.forms.ListThemeRequest = {}): Promise<void> {
        const { search, page, pageSize, workspaceId } = request;
        const _queryParams = new URLSearchParams();
        if (search != null) {
            _queryParams.append("search", search);
        }

        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (workspaceId != null) {
            _queryParams.append("workspace_id", workspaceId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.TypeformEnvironment.Production, "/forms"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
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
     * Expand the schema below for details about each of these elements. For optional elements, if you don't send a value and the element doesn't have a default value, no attribute will be returned. Any images you want to use in your form must already exist in your Typeform account. If you try to create a form that includes an image that isn't already in your Typeform account, the response will include an "IMAGE_NOT_FOUND" error. Use the [POST https://api.typeform.com/images](/create/reference/create-image) endpoint to add images to your account. **NOTE:** It is not possible to inject third-party content into a typeform using the Create API.
     */
    public async create(request: Typeform.forms.CreateFormRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.TypeformEnvironment.Production, "/forms"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.forms.CreateFormRequest.jsonOrThrow(request),
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

    /**
     * Retrieves a form by the given `form_id`. Includes any theme and images attached to the form as references. Details about the fields and elements for this endpoint are available in the **Create Form** description.
     */
    public async get(formId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.TypeformEnvironment.Production, `/forms/${formId}`),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
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

    /**
     * Deletes the form with the given `form_id` and all of the form's responses.
     */
    public async delete(formId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.TypeformEnvironment.Production, `/forms/${formId}`),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
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

    #messages: MessagesClient | undefined;

    public get messages(): MessagesClient {
        return (this.#messages ??= new MessagesClient(this.options));
    }
}
