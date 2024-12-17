# Flip Transaction

## Description
A project for managing and displaying transactions. This project includes features such as listing transactions, viewing transaction details, and searching for specific transactions.

## Project Structure
```
src/
|
├── components/
│   ├── TransactionList.tsx
│   ├── TransactionItem.tsx
│   ├── TransactionDetail.tsx
│   ├── SearchBar.tsx
|
├── hooks/
│   ├── useTransactionList.ts
│   ├── useTransaction.ts
|
├── services/
│   ├── transactionService.ts
|
├── screens/
│   ├── TransactionListScreen.tsx
│   ├── TransactionDetailScreen.tsx
|
├── models/
│   ├── types.ts
|
├── navigation/
│   ├── types.ts
|
├── styles/
│   ├── SearchBar.styles.ts
│   ├── TransactionDetail.styles.ts
│   ├── TransactionList.styles.ts
│   ├── TransactionListScreen.styles.ts
|
├── utils/
│   ├── currencyUtils.ts
│   ├── dateUtils.ts
|
└── App.tsx
```

## How To Run
To run the application on an Android device or emulator, execute the following command:

```
npx react-native run-android
```

## Author
**Name:** Mohammad Alauddin  
**Email:** [alken.com.dev@gmail.com](mailto:alken.com.dev@gmail.com)

