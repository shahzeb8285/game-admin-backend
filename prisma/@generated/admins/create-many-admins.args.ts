import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsCreateManyInput } from './admins-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdminsArgs {

    @Field(() => [AdminsCreateManyInput], {nullable:false})
    @Type(() => AdminsCreateManyInput)
    data!: Array<AdminsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
