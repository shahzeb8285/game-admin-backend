import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerUpdateManyMutationInput } from './player-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PlayerWhereInput } from './player-where.input';

@ArgsType()
export class UpdateManyPlayerArgs {

    @Field(() => PlayerUpdateManyMutationInput, {nullable:false})
    @Type(() => PlayerUpdateManyMutationInput)
    data!: PlayerUpdateManyMutationInput;

    @Field(() => PlayerWhereInput, {nullable:true})
    @Type(() => PlayerWhereInput)
    where?: PlayerWhereInput;
}
