import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerUpdateInput } from './player-update.input';
import { Type } from 'class-transformer';
import { PlayerWhereUniqueInput } from './player-where-unique.input';

@ArgsType()
export class UpdateOnePlayerArgs {

    @Field(() => PlayerUpdateInput, {nullable:false})
    @Type(() => PlayerUpdateInput)
    data!: PlayerUpdateInput;

    @Field(() => PlayerWhereUniqueInput, {nullable:false})
    @Type(() => PlayerWhereUniqueInput)
    where!: PlayerWhereUniqueInput;
}
