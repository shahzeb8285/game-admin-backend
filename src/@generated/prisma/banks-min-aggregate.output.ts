import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BanksMinAggregate {

    @Field(() => String, {nullable:true})
    bank_id?: string;

    @Field(() => String, {nullable:true})
    bank_name?: string;

    @Field(() => String, {nullable:true})
    bank_code?: string;
}
