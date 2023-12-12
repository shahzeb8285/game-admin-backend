import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersUpdateManyMutationInput } from './players-update-many-mutation.input';
import { Type } from 'class-transformer';
import { playersWhereInput } from './players-where.input';

@ArgsType()
export class UpdateManyplayersArgs {

    @Field(() => playersUpdateManyMutationInput, {nullable:false})
    @Type(() => playersUpdateManyMutationInput)
    data!: playersUpdateManyMutationInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
