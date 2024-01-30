import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class all_ow_requests {

    @Field(() => ID, {nullable:false})
    all_ow_request_id!: string;

    @Field(() => String, {nullable:false})
    request!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;
}
