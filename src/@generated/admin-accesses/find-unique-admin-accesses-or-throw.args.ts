import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminAccessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdminAccessesOrThrowArgs {

    @Field(() => AdminAccessesWhereUniqueInput, {nullable:false})
    @Type(() => AdminAccessesWhereUniqueInput)
    where!: AdminAccessesWhereUniqueInput;
}
