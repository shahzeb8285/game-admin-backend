import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { playersUpdateInput } from './players-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';

@ArgsType()
export class UpdateOneplayersArgs {

    @Field(() => playersUpdateInput, {nullable:false})
    @Type(() => playersUpdateInput)
    data!: playersUpdateInput;

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
