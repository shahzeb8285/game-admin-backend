import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesWhereUniqueInput } from '../admin-accesses/admin-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { admin_accessesCreateInput } from '../admin-accesses/admin-accesses-create.input';
import { admin_accessesUpdateInput } from '../admin-accesses/admin-accesses-update.input';

@ArgsType()
export class UpsertOneadminAccessesArgs {

    @Field(() => admin_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_accessesWhereUniqueInput)
    where!: admin_accessesWhereUniqueInput;

    @Field(() => admin_accessesCreateInput, {nullable:false})
    @Type(() => admin_accessesCreateInput)
    create!: admin_accessesCreateInput;

    @Field(() => admin_accessesUpdateInput, {nullable:false})
    @Type(() => admin_accessesUpdateInput)
    update!: admin_accessesUpdateInput;
}
