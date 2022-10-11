ALTER TABLE order_details
RENAME TO orderDetails;


select u.first_name,u.last_name,u.email,u.password,u.contact_number,u.role,s.gstin from users u inner join sellers s
 on u.user_id=s.seller_id and u.role in ('seller');





 CREATE PROCEDURE `FundTransfer` (IN amount float,IN fromaccount int,IN toaccount int)
BEGIN
START TRANSACTION;
SET @Amount=amount;
SET @FromAccount=fromaccount;
SET @ToAccount=toaccount;
UPDATE accounts SET balance=balance-@Amount WHERE id=@FromAccount;
UPDATE accounts SET balance=balance+@Amount WHERE id=@ToAccount;
COMMIT;
END
