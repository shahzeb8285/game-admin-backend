import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminAccessesWhereInput } from './admin-accesses-where.input';

@InputType()
export class AdminAccessesRelationFilter {

    @Field(() => AdminAccessesWhereInput, {nullable:true})
    is?: AdminAccessesWhereInput;

    @Field(() => AdminAccessesWhereInput, {nullable:true})
    isNot?: AdminAccessesWhereInput;
}
