class Solution {
    public int solution(int[][] board) {
        for(int i = 0; i< board.length; i++){
            for(int j = 0; j< board.length; j++){
                if(board[i][j]==1){
                    if(i==0){
                        if(j==0){
                            //아래
                            if(board[i][j+1]!=1) board[i][j+1] = 2;
                            //오른쪽
                            if(board[i+1][j]!=1) board[i+1][j] = 2;          
                            //오른쪽아래
                            if(board[i+1][j+1]!=1) board[i+1][j+1] = 2;     
                        }else if(j==board.length-1){
                            //위
                            if(board[i][j-1]!=1) board[i][j-1] = 2;
                            //오른쪽
                            if(board[i+1][j]!=1) board[i+1][j] = 2;
                            //오른쪽위
                            if(board[i+1][j-1]!=1) board[i+1][j-1] = 2;   
                        }else{
                            //위
                            if(board[i][j-1]!=1) board[i][j-1] = 2;
                            //아래
                            if(board[i][j+1]!=1) board[i][j+1] = 2;
                            //오른쪽
                            if(board[i+1][j]!=1) board[i+1][j] = 2;
                            //오른쪽위
                            if(board[i+1][j-1]!=1) board[i+1][j-1] = 2;          
                            //오른쪽아래
                            if(board[i+1][j+1]!=1) board[i+1][j+1] = 2;     
                        }
                    }else if(i==board.length-1){
                        if(j==0){
                            //아래
                            if(board[i][j+1]!=1) board[i][j+1] = 2;
                            //왼쪽
                            if(board[i-1][j]!=1) board[i-1][j] = 2;
                            //왼쪽아래
                            if(board[i-1][j+1]!=1) board[i-1][j+1] = 2;
                        }else if(j==board.length-1){
                            //위
                            if(board[i][j-1]!=1) board[i][j-1] = 2;
                            //왼쪽
                            if(board[i-1][j]!=1) board[i-1][j] = 2;
                            //왼쪽위
                            if(board[i-1][j-1]!=1) board[i-1][j-1] = 2;
                        }else{
                            //위
                            if(board[i][j-1]!=1) board[i][j-1] = 2;
                            //아래
                            if(board[i][j+1]!=1) board[i][j+1] = 2;
                            //왼쪽
                            if(board[i-1][j]!=1) board[i-1][j] = 2;
                            //왼쪽위
                            if(board[i-1][j-1]!=1) board[i-1][j-1] = 2;
                            //왼쪽아래
                            if(board[i-1][j+1]!=1) board[i-1][j+1] = 2;
                        }
                    }else{
                        if(j==0){
                            //아래
                            if(board[i][j+1]!=1) board[i][j+1] = 2;
                            //왼쪽
                            if(board[i-1][j]!=1) board[i-1][j] = 2;
                            //왼쪽아래
                            if(board[i-1][j+1]!=1) board[i-1][j+1] = 2;
                            //오른쪽
                            if(board[i+1][j]!=1) board[i+1][j] = 2; 
                            //오른쪽아래
                            if(board[i+1][j+1]!=1) board[i+1][j+1] = 2;      
                        }else if(j==board.length-1){
                            //위
                            if(board[i][j-1]!=1) board[i][j-1] = 2;
                            //왼쪽
                            if(board[i-1][j]!=1) board[i-1][j] = 2;
                            //왼쪽위
                            if(board[i-1][j-1]!=1) board[i-1][j-1] = 2;
                            //오른쪽
                            if(board[i+1][j]!=1) board[i+1][j] = 2; 
                            //오른쪽위
                            if(board[i+1][j-1]!=1) board[i+1][j-1] = 2;  
                        }else{
                            //위
                            if(board[i][j-1]!=1) board[i][j-1] = 2;
                            //아래
                            if(board[i][j+1]!=1) board[i][j+1] = 2;
                            //왼쪽
                            if(board[i-1][j]!=1) board[i-1][j] = 2;
                            //왼쪽위
                            if(board[i-1][j-1]!=1) board[i-1][j-1] = 2;
                            //왼쪽아래
                            if(board[i-1][j+1]!=1) board[i-1][j+1] = 2;
                            //오른쪽
                            if(board[i+1][j]!=1) board[i+1][j] = 2; 
                            //오른쪽위
                            if(board[i+1][j-1]!=1) board[i+1][j-1] = 2; 
                            //오른쪽아래
                            if(board[i+1][j+1]!=1) board[i+1][j+1] = 2;    
                        }    
                    }
                }
            }
        }
        
        int answer = 0;
        
        for(int i = 0; i< board.length; i++){
            for(int j = 0; j< board.length; j++){
                if(board[i][j]==0) answer++;
            }
        }
        
        return answer;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[][] board = {
            {0, 0, 0, 0, 0},
            {0, 0, 0, 0, 0},
            {0, 0, 0, 0, 0},
            {0, 0, 1, 0, 0},
            {0, 0, 0, 0, 0}
        };

        int[][] board2 = {
            {1, 1, 1, 1, 1, 1}, 
            {1, 1, 1, 1, 1, 1}, 
            {1, 1, 1, 1, 1, 1}, 
            {1, 1, 1, 1, 1, 1}, 
            {1, 1, 1, 1, 1, 1},
            {1, 1, 1, 1, 1, 1}
        };

        int[][] board3 = {
            {0}
        };

        int[][] board4 = {
            {1}
        };

        int answer = solution.solution(board);
        System.out.println(answer); // 예상 결과: 16
        answer = solution.solution(board2);
        System.out.println(answer); // 예상 결과: 0
        answer = solution.solution(board3);
        System.out.println(answer); // 예상 결과: 0
        answer = solution.solution(board4);
        System.out.println(answer); // 예상 결과: 0
    }
}