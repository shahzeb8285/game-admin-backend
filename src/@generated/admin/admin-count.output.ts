import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminCount {

    @Field(() => Int, {nullable:false})
    admin_login_logs?: number;

    @Field(() => Int, {nullable:false})
    manual_adjustments?: number;
}
