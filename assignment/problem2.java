package assignment;

import java.util.HashMap;
import java.util.Scanner;

public class problem2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
      Scanner sc=new Scanner(System.in);
      int n=1;
      while(n>0)
      {
      System.out.println("Enter roman number");
      String s=sc.next();
      int result=0;
      HashMap<Character,Integer> map1=new HashMap<>();
      map1.put('I', 1);
      map1.put('V', 5);
      map1.put('X', 10);
      map1.put('L', 50);
      map1.put('C', 100);
      map1.put('D',500);
      map1.put('M', 1000);
      
      for(int i=0;i<s.length();i++)
      {
    	  int currentval=map1.get(s.charAt(i));
    	  
    	  if(i<s.length()-1 && currentval<map1.get(s.charAt(i+1)))
    	  {
    		  result=result-currentval;
    	  }
    	  else
    	  {
    		  result=result+currentval;
    	  }
      }
      System.out.println(result);
      n++;
	}
	}
}
