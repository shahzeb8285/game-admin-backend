import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksCreateManyInput } from './banks-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManybanksArgs {

    @Field(() => [banksCreateManyInput], {nullable:false})
    @Type(() => banksCreateManyInput)
    data!: Array<banksCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
