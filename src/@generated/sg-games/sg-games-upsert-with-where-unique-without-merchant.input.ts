import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesWhereUniqueInput } from './sg-games-where-unique.input';
import { Type } from 'class-transformer';
import { sg_gamesUpdateWithoutMerchantInput } from './sg-games-update-without-merchant.input';
import { sg_gamesCreateWithoutMerchantInput } from './sg-games-create-without-merchant.input';

@InputType()
export class sg_gamesUpsertWithWhereUniqueWithoutMerchantInput {

    @Field(() => sg_gamesWhereUniqueInput, {nullable:false})
    @Type(() => sg_gamesWhereUniqueInput)
    where!: sg_gamesWhereUniqueInput;

    @Field(() => sg_gamesUpdateWithoutMerchantInput, {nullable:false})
    @Type(() => sg_gamesUpdateWithoutMerchantInput)
    update!: sg_gamesUpdateWithoutMerchantInput;

    @Field(() => sg_gamesCreateWithoutMerchantInput, {nullable:false})
    @Type(() => sg_gamesCreateWithoutMerchantInput)
    create!: sg_gamesCreateWithoutMerchantInput;
}
