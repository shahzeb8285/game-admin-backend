import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrentActivePlayersUpdateManyMutationInput } from './current-active-players-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CurrentActivePlayersWhereInput } from './current-active-players-where.input';

@ArgsType()
export class UpdateManyCurrentActivePlayersArgs {

    @Field(() => CurrentActivePlayersUpdateManyMutationInput, {nullable:false})
    @Type(() => CurrentActivePlayersUpdateManyMutationInput)
    data!: CurrentActivePlayersUpdateManyMutationInput;

    @Field(() => CurrentActivePlayersWhereInput, {nullable:true})
    @Type(() => CurrentActivePlayersWhereInput)
    where?: CurrentActivePlayersWhereInput;
}
