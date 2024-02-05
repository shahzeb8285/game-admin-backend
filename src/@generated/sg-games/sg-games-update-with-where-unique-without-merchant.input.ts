import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesWhereUniqueInput } from './sg-games-where-unique.input';
import { Type } from 'class-transformer';
import { sg_gamesUpdateWithoutMerchantInput } from './sg-games-update-without-merchant.input';

@InputType()
export class sg_gamesUpdateWithWhereUniqueWithoutMerchantInput {

    @Field(() => sg_gamesWhereUniqueInput, {nullable:false})
    @Type(() => sg_gamesWhereUniqueInput)
    where!: sg_gamesWhereUniqueInput;

    @Field(() => sg_gamesUpdateWithoutMerchantInput, {nullable:false})
    @Type(() => sg_gamesUpdateWithoutMerchantInput)
    data!: sg_gamesUpdateWithoutMerchantInput;
}
