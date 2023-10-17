package assignment;

import java.util.Scanner;

public class Problem3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc =new Scanner(System.in);
		System.out.println("Enter string");
		String s=sc.next();
		s=s.toLowerCase();
		boolean ispresent=false;
		
		for(char ch='a';ch<='z';ch++)
		{
			if(s.contains(String.valueOf(ch)))
			{
				ispresent=true;
			}
			else
			{
				ispresent=false;
			}
		}
		System.out.println(ispresent);

	}

}
