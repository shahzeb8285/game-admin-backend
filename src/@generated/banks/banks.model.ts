import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class banks {

    @Field(() => ID, {nullable:false})
    bank_id!: string;

    @Field(() => String, {nullable:false})
    bank_name!: string;

    @Field(() => String, {nullable:false})
    bank_code!: string;
}
