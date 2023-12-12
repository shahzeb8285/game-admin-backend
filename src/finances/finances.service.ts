import { Injectable } from '@nestjs/common';
import { CreateBankAccountInput, UpdateBankAccountInput } from './dto/create-finance.input';
import { UpdateFinanceInput } from './dto/update-finance.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class FinancesService {

  constructor(
    private readonly prisma: PrismaService,
  ) { }

  createBankAccount(data: CreateBankAccountInput) {
    return this.prisma.admin_bank_accounts.create({
      data: {
        ...data
      }
    })
  }


  updateBankAccount(data: UpdateBankAccountInput) {
    const payload: any = {
      ...data,
    }
    delete payload.adminBankAccountID
    return this.prisma.admin_bank_accounts.update({
      where: {
        admin_bank_account_id: data.admin_bank_account_id,
      },
      data: {
        ...payload
      }
    })
  }

  getDeposits() {
    return this.prisma.deposit_transactions.findMany({
      include: {
        players: true,
        admin_bank_accounts: true
      }
    });

  }


  getBankAccounts() {
    return this.prisma.admin_bank_accounts.findMany({
      include: {
        deposit_transactions: true,
        withdrawal_transactions: true
      }
    })
  }

  getWithdrawals() {
    return this.prisma.withdrawal_transactions.findMany({
      include: {
        players: true,
        admin_bank_accounts: true
      }
    });

  }



  updateWithdrawal(data: UpdateFinanceInput) {
    return this.prisma.withdrawal_transactions.update({
      where: {
        withdrawal_transaction_id: data.id
      },
      data: {
        status: data.is_enabled ? "SUCCESS" : "REJECTED"
      },
      include: {
        players: true,
        admin_bank_accounts: true
      }
    })
  }


  updateDeposit(data: UpdateFinanceInput) {
    return this.prisma.deposit_transactions.update({
      where: {
        deposit_transaction_id: data.id
      },
      data: {
        status: data.is_enabled ? "SUCCESS" : "REJECTED"
      },
      include: {
        players: true,
        admin_bank_accounts: true
      }
    })
  }





}
