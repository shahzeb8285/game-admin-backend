import { InputType, Int, Field, PartialType } from '@nestjs/graphql';



import { registerEnumType } from '@nestjs/graphql';

export enum TransactionTypeEnum {
    DEPOSIT = "DEPOSIT",
    WITHDRAWAL = "WITHDRAWAL",
    TRANSFER_IN = "TRANSFER_IN",
    TRANSFER_OUT = "TRANSFER_OUT"

}


registerEnumType(TransactionTypeEnum, { name: 'transactionType', description: undefined })


export enum ApprovalStatusEnum {
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
}


registerEnumType(ApprovalStatusEnum, { name: 'ApprovalStatus', description: undefined })


@InputType()
export class TransactionActionDto {
  @Field(() => TransactionTypeEnum, { nullable: false })
  transactionType!: TransactionTypeEnum;

  @Field(() => ApprovalStatusEnum, { nullable: false })
  approvalStatus!: ApprovalStatusEnum;

  @Field(() => String, { nullable: false })
  transactionId!: string;

  @Field(() => String, { nullable: false })
  comment: string;
}