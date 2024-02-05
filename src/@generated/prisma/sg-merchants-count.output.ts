import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_merchantsCount {

    @Field(() => Int, {nullable:false})
    sg_games!: number;
}
