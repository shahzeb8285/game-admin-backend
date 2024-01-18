import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminAccessesCreateManyInput } from './admin-accesses-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdminAccessesArgs {

    @Field(() => [AdminAccessesCreateManyInput], {nullable:false})
    @Type(() => AdminAccessesCreateManyInput)
    data!: Array<AdminAccessesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
