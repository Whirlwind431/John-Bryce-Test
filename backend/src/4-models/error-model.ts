export class ErrorModel {
    public constructor(public message: string, public status: number) { }
}


export class routeNotFoundErrorModel extends ErrorModel {
    public constructor(route: string) {
        super(`Route ${route} not exists`, 404)
    }
}

export class ValidationErrorModel extends ErrorModel {
    public constructor(message: string) {
        super(message, 400)
    }
}

export class ResourceNotFoundErrorModel extends ErrorModel {
    public constructor(id: number) {
        super(`id ${id} not exists`, 404)
    }
}

export class StillNothingToShowErrorModel extends ErrorModel {
    public constructor(id: number) {
        super(`Choosen team with id ${id} doesn't have any meetings yet`, 404)
    }
}