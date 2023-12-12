import { registerEnumType } from '@nestjs/graphql';

export enum All_ow_requestsScalarFieldEnum {
    allow_request_id = "allow_request_id",
    request = "request",
    cdate = "cdate"
}


registerEnumType(All_ow_requestsScalarFieldEnum, { name: 'All_ow_requestsScalarFieldEnum', description: undefined })
