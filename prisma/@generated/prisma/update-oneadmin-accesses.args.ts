import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesUpdateInput } from '../admin-accesses/admin-accesses-update.input';
import { Type } from 'class-transformer';
import { admin_accessesWhereUniqueInput } from '../admin-accesses/admin-accesses-where-unique.input';

@ArgsType()
export class UpdateOneadminAccessesArgs {

    @Field(() => admin_accessesUpdateInput, {nullable:false})
    @Type(() => admin_accessesUpdateInput)
    data!: admin_accessesUpdateInput;

    @Field(() => admin_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_accessesWhereUniqueInput)
    where!: admin_accessesWhereUniqueInput;
}
