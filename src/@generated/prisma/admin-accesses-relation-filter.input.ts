import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesWhereInput } from '../admin-accesses/admin-accesses-where.input';

@InputType()
export class Admin_accessesRelationFilter {

    @Field(() => admin_accessesWhereInput, {nullable:true})
    is?: admin_accessesWhereInput;

    @Field(() => admin_accessesWhereInput, {nullable:true})
    isNot?: admin_accessesWhereInput;
}
