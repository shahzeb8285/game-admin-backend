import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { adminsCreateManyInput } from './admins-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyadminsArgs {

    @Field(() => [adminsCreateManyInput], {nullable:false})
    @Type(() => adminsCreateManyInput)
    data!: Array<adminsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
