import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class AllOwRequest {

    @Field(() => ID, {nullable:false})
    allow_request_id!: string;

    @Field(() => String, {nullable:false})
    request!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;
}
