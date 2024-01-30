import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bank_method } from './bank-method.enum';

@InputType()
export class NestedEnumbank_methodFilter {

    @Field(() => bank_method, {nullable:true})
    equals?: keyof typeof bank_method;

    @Field(() => [bank_method], {nullable:true})
    in?: Array<keyof typeof bank_method>;

    @Field(() => [bank_method], {nullable:true})
    notIn?: Array<keyof typeof bank_method>;

    @Field(() => NestedEnumbank_methodFilter, {nullable:true})
    not?: NestedEnumbank_methodFilter;
}
