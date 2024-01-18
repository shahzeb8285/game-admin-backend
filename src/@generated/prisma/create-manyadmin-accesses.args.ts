import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesCreateManyInput } from '../admin-accesses/admin-accesses-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyadminAccessesArgs {

    @Field(() => [admin_accessesCreateManyInput], {nullable:false})
    @Type(() => admin_accessesCreateManyInput)
    data!: Array<admin_accessesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
