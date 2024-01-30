import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_status } from './rebate-status.enum';

@InputType()
export class NestedEnumrebate_statusFilter {

    @Field(() => rebate_status, {nullable:true})
    equals?: keyof typeof rebate_status;

    @Field(() => [rebate_status], {nullable:true})
    in?: Array<keyof typeof rebate_status>;

    @Field(() => [rebate_status], {nullable:true})
    notIn?: Array<keyof typeof rebate_status>;

    @Field(() => NestedEnumrebate_statusFilter, {nullable:true})
    not?: NestedEnumrebate_statusFilter;
}
