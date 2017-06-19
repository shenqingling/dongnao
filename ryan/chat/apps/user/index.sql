<user>
SELECT * 
        FROM users 
        WHERE 
        id IN (SELECT userId FROM relations WHERE friendId = 1) 
        OR 
        id IN (SELECT friendId FROM relations WHERE userId = 1) ;
</user>