import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_merchantsUpdateWithoutSg_gamesInput } from './sg-merchants-update-without-sg-games.input';
import { Type } from 'class-transformer';
import { sg_merchantsCreateWithoutSg_gamesInput } from './sg-merchants-create-without-sg-games.input';
import { sg_merchantsWhereInput } from './sg-merchants-where.input';

@InputType()
export class sg_merchantsUpsertWithoutSg_gamesInput {

    @Field(() => sg_merchantsUpdateWithoutSg_gamesInput, {nullable:false})
    @Type(() => sg_merchantsUpdateWithoutSg_gamesInput)
    update!: sg_merchantsUpdateWithoutSg_gamesInput;

    @Field(() => sg_merchantsCreateWithoutSg_gamesInput, {nullable:false})
    @Type(() => sg_merchantsCreateWithoutSg_gamesInput)
    create!: sg_merchantsCreateWithoutSg_gamesInput;

    @Field(() => sg_merchantsWhereInput, {nullable:true})
    @Type(() => sg_merchantsWhereInput)
    where?: sg_merchantsWhereInput;
}
