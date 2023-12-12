import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesWhereUniqueInput } from '../admin-accesses/admin-accesses-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueadminAccessesArgs {

    @Field(() => admin_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_accessesWhereUniqueInput)
    where!: admin_accessesWhereUniqueInput;
}
