import { registerEnumType } from '@nestjs/graphql';

export enum AllOwRequestScalarFieldEnum {
    allow_request_id = "allow_request_id",
    request = "request",
    cdate = "cdate"
}


registerEnumType(AllOwRequestScalarFieldEnum, { name: 'AllOwRequestScalarFieldEnum', description: undefined })
