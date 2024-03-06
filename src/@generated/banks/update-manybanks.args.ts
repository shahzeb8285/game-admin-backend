import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksUpdateManyMutationInput } from './banks-update-many-mutation.input';
import { Type } from 'class-transformer';
import { banksWhereInput } from './banks-where.input';

@ArgsType()
export class UpdateManybanksArgs {

    @Field(() => banksUpdateManyMutationInput, {nullable:false})
    @Type(() => banksUpdateManyMutationInput)
    data!: banksUpdateManyMutationInput;

    @Field(() => banksWhereInput, {nullable:true})
    @Type(() => banksWhereInput)
    where?: banksWhereInput;
}
