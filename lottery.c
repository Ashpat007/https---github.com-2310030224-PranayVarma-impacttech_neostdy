#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main() {
    int n, burst_time[10], tickets[10], done[10] = {0}, total = 0, completed = 0;
    printf("Enter number of processes: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("P%d Burst Time: ", i+1);
        scanf("%d", &burst_time[i]);
        printf("P%d Tickets: ", i+1);
        scanf("%d", &tickets[i]);
        total += tickets[i];
    }
    srand(time(NULL));
    printf("\nLottery Scheduling Execution:\n");

    while (completed < n) {
        int win = rand() % total + 1, sum = 0;
        for (int i = 0; i < n; i++) {
            if (!done[i]) {
                sum += tickets[i];
                if (sum >= win) {
                    printf("Process P%d executed (BT: %d)\n", i+1, burst_time[i]);
                    total -= tickets[i];
                    done[i] = 1;
                    completed++;
                    break;
                }
            }
        }
    }
    printf("All processes completed.\n");
    return 0;
}
